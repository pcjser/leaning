(function () {
        function Fireworks() {
            this.appName = 'Fireworks';
            this.path = '/app/Fireworks/';
            this.initialized = false;
            var self=this;

            var Fireworks = function () {
                var that = this;
                var rand = function (rMi, rMa) {
                    return ~~((Math.random() * (rMa - rMi + 1)) + rMi);
                }
                var hitTest = function (x1, y1, w1, h1, x2, y2, w2, h2) {
                    return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
                };
                window.requestAnimFrame = function () {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
                            window.setTimeout(a, 1E3 / 60)
                        }
                }();

                that.init = function () {
                    that.canvas = document.createElement('canvas');
                    that.canvas.width = that.cw = $(window).width();
                    that.canvas.height = that.ch = $(window).height();
                    that.particles = [];
                    that.partCount = 150;
                    that.fireworks = [];
                    that.mx = that.cw / 2;
                    that.my = that.ch / 2;
                    that.currentHue = 30;
                    that.partSpeed = 5;
                    that.partSpeedVariance = 10;
                    that.partWind = 50;
                    that.partFriction = 5;
                    that.partGravity = 1;
                    that.hueMin = 0;
                    that.hueMax = 360;
                    that.fworkSpeed = 4;
                    that.fworkAccel = 10;
                    that.hueVariance = 30;
                    that.flickerDensity = 25;
                    that.showShockwave = true;
                    that.showTarget = false;
                    that.clearAlpha = 25;

                    // $(document.body).append(that.canvas);
                    that.ctx = that.canvas.getContext('2d');
                    that.ctx.lineCap = 'round';
                    that.ctx.lineJoin = 'round';
                    that.lineWidth = 1;
                    that.bindEvents();
                    that.canvasLoop();

                    that.canvas.onselectstart = function () {
                        return false;
                    };
                };

                that.createParticles = function (x, y, hue) {
                    var countdown = that.partCount;
                    while (countdown--) {
                        var newParticle = {
                            x: x,
                            y: y,
                            coordLast: [
                                {x: x, y: y},
                                {x: x, y: y},
                                {x: x, y: y}
                            ],
                            angle: rand(0, 360),
                            speed: rand(((that.partSpeed - that.partSpeedVariance) <= 0) ? 1 : that.partSpeed - that.partSpeedVariance, (that.partSpeed + that.partSpeedVariance)),
                            friction: 1 - that.partFriction / 100,
                            gravity: that.partGravity / 2,
                            hue: rand(hue - that.hueVariance, hue + that.hueVariance),
                            brightness: rand(50, 80),
                            alpha: rand(40, 100) / 100,
                            decay: rand(10, 50) / 1000,
                            wind: (rand(0, that.partWind) - (that.partWind / 2)) / 25,
                            lineWidth: that.lineWidth
                        };
                        that.particles.push(newParticle);
                    }
                };


                that.updateParticles = function () {
                    var i = that.particles.length;
                    while (i--) {
                        var p = that.particles[i];
                        var radians = p.angle * Math.PI / 180;
                        var vx = Math.cos(radians) * p.speed;
                        var vy = Math.sin(radians) * p.speed;
                        p.speed *= p.friction;

                        p.coordLast[2].x = p.coordLast[1].x;
                        p.coordLast[2].y = p.coordLast[1].y;
                        p.coordLast[1].x = p.coordLast[0].x;
                        p.coordLast[1].y = p.coordLast[0].y;
                        p.coordLast[0].x = p.x;
                        p.coordLast[0].y = p.y;

                        p.x += vx;
                        p.y += vy;
                        p.y += p.gravity;

                        p.angle += p.wind;
                        p.alpha -= p.decay;

                        if (!hitTest(0, 0, that.cw, that.ch, p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2) || p.alpha < .05) {
                            that.particles.splice(i, 1);
                        }
                    }
                    ;
                };

                that.drawParticles = function () {
                    var i = that.particles.length;
                    while (i--) {
                        var p = that.particles[i];

                        var coordRand = (rand(1, 3) - 1);
                        that.ctx.beginPath();
                        that.ctx.moveTo(Math.round(p.coordLast[coordRand].x), Math.round(p.coordLast[coordRand].y));
                        that.ctx.lineTo(Math.round(p.x), Math.round(p.y));
                        that.ctx.closePath();
                        that.ctx.strokeStyle = 'hsla(' + p.hue + ', 100%, ' + p.brightness + '%, ' + p.alpha + ')';
                        that.ctx.stroke();

                        if (that.flickerDensity > 0) {
                            var inverseDensity = 50 - that.flickerDensity;
                            if (rand(0, inverseDensity) === inverseDensity) {
                                that.ctx.beginPath();
                                that.ctx.arc(Math.round(p.x), Math.round(p.y), rand(p.lineWidth, p.lineWidth + 3) / 2, 0, Math.PI * 2, false)
                                that.ctx.closePath();
                                var randAlpha = rand(50, 100) / 100;
                                that.ctx.fillStyle = 'hsla(' + p.hue + ', 100%, ' + p.brightness + '%, ' + randAlpha + ')';
                                that.ctx.fill();
                            }
                        }
                    }
                    ;
                };


                that.createFireworks = function (startX, startY, targetX, targetY) {
                    var newFirework = {
                        x: startX,
                        y: startY,
                        startX: startX,
                        startY: startY,
                        hitX: false,
                        hitY: false,
                        coordLast: [
                            {x: startX, y: startY},
                            {x: startX, y: startY},
                            {x: startX, y: startY}
                        ],
                        targetX: targetX,
                        targetY: targetY,
                        speed: that.fworkSpeed,
                        angle: Math.atan2(targetY - startY, targetX - startX),
                        shockwaveAngle: Math.atan2(targetY - startY, targetX - startX) + (90 * (Math.PI / 180)),
                        acceleration: that.fworkAccel / 100,
                        hue: that.currentHue,
                        brightness: rand(50, 80),
                        alpha: rand(50, 100) / 100,
                        lineWidth: that.lineWidth
                    };
                    that.fireworks.push(newFirework);

                };


                that.updateFireworks = function () {
                    var i = that.fireworks.length;

                    while (i--) {
                        var f = that.fireworks[i];
                        that.ctx.lineWidth = f.lineWidth;

                        vx = Math.cos(f.angle) * f.speed,
                            vy = Math.sin(f.angle) * f.speed;
                        f.speed *= 1 + f.acceleration;
                        f.coordLast[2].x = f.coordLast[1].x;
                        f.coordLast[2].y = f.coordLast[1].y;
                        f.coordLast[1].x = f.coordLast[0].x;
                        f.coordLast[1].y = f.coordLast[0].y;
                        f.coordLast[0].x = f.x;
                        f.coordLast[0].y = f.y;

                        if (f.startX >= f.targetX) {
                            if (f.x + vx <= f.targetX) {
                                f.x = f.targetX;
                                f.hitX = true;
                            } else {
                                f.x += vx;
                            }
                        } else {
                            if (f.x + vx >= f.targetX) {
                                f.x = f.targetX;
                                f.hitX = true;
                            } else {
                                f.x += vx;
                            }
                        }

                        if (f.startY >= f.targetY) {
                            if (f.y + vy <= f.targetY) {
                                f.y = f.targetY;
                                f.hitY = true;
                            } else {
                                f.y += vy;
                            }
                        } else {
                            if (f.y + vy >= f.targetY) {
                                f.y = f.targetY;
                                f.hitY = true;
                            } else {
                                f.y += vy;
                            }
                        }

                        if (f.hitX && f.hitY) {
                            that.createParticles(f.targetX, f.targetY, f.hue);
                            that.fireworks.splice(i, 1);

                        }
                    }
                    ;
                };

                that.drawFireworks = function () {
                    var i = that.fireworks.length;
                    that.ctx.globalCompositeOperation = 'lighter';
                    while (i--) {
                        var f = that.fireworks[i];
                        that.ctx.lineWidth = f.lineWidth;

                        var coordRand = (rand(1, 3) - 1);
                        that.ctx.beginPath();
                        that.ctx.moveTo(Math.round(f.coordLast[coordRand].x), Math.round(f.coordLast[coordRand].y));
                        that.ctx.lineTo(Math.round(f.x), Math.round(f.y));
                        that.ctx.closePath();
                        that.ctx.strokeStyle = 'hsla(' + f.hue + ', 100%, ' + f.brightness + '%, ' + f.alpha + ')';
                        that.ctx.stroke();

                        if (that.showTarget) {
                            that.ctx.save();
                            that.ctx.beginPath();
                            that.ctx.arc(Math.round(f.targetX), Math.round(f.targetY), rand(1, 8), 0, Math.PI * 2, false)
                            that.ctx.closePath();
                            that.ctx.lineWidth = 1;
                            that.ctx.stroke();
                            that.ctx.restore();
                        }

                        if (that.showShockwave) {
                            that.ctx.save();
                            that.ctx.translate(Math.round(f.x), Math.round(f.y));
                            that.ctx.rotate(f.shockwaveAngle);
                            that.ctx.beginPath();
                            that.ctx.arc(0, 0, 1 * (f.speed / 5), 0, Math.PI, true);
                            that.ctx.strokeStyle = 'hsla(' + f.hue + ', 100%, ' + f.brightness + '%, ' + rand(25, 60) / 100 + ')';
                            that.ctx.lineWidth = f.lineWidth;
                            that.ctx.stroke();
                            that.ctx.restore();
                        }
                    }
                    ;
                };

                that.bindEvents = function () {
                    $(window).on('resize', function () {
                        clearTimeout(that.timeout);
                        that.timeout = setTimeout(function () {
                            that.canvas.width = that.cw = $(window).innerWidth();
                            that.canvas.height = that.ch = $(window).innerHeight();
                            that.ctx.lineCap = 'round';
                            that.ctx.lineJoin = 'round';
                        }, 100);
                    });

                    // $(self.canvas).on('mousedown', function (e) {
                    //     self.mx = e.pageX - self.canvas.offsetLeft;
                    //     self.my = e.pageY - self.canvas.offsetTop;
                    //     self.currentHue = rand(self.hueMin, self.hueMax);
                    //     self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);
                    //
                    //     $(self.canvas).on('mousemove.fireworks', function (e) {
                    //         self.mx = e.pageX - self.canvas.offsetLeft;
                    //         self.my = e.pageY - self.canvas.offsetTop;
                    //         self.currentHue = rand(self.hueMin, self.hueMax);
                    //         self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);
                    //     });
                    // });
                    //
                    // $(self.canvas).on('mouseup', function (e) {
                    //     $(self.canvas).off('mousemove.fireworks');
                    // });

                }

                that.clear = function () {
                    that.particles = [];
                    that.fireworks = [];
                    that.ctx.clearRect(0, 0, that.cw, that.ch);
                };


                that.canvasLoop = function () {
                    requestAnimFrame(that.canvasLoop, that.canvas);
                    that.ctx.globalCompositeOperation = 'destination-out';
                    that.ctx.fillStyle = 'rgba(0,0,0,' + that.clearAlpha / 100 + ')';
                    that.ctx.fillRect(0, 0, that.cw, that.ch);
                    that.updateFireworks();
                    that.updateParticles();
                    that.drawFireworks();
                    that.drawParticles();

                };

                that.init();

            }
            this.fworks = new Fireworks();


            this.init();
        }

        PM.extend(Fireworks, {
            /**
             * 应用初始化
             * @param
             */
            init: function () {
                this.initialized = true;

            },
            fire:function (args) {
                var dur=args.dur||3;
                var self=this;
                var step=100;
                var durInt=setInterval(function () {
                    if(dur*1000<=0)
                    {
                        clearInterval(durInt);
                        return;
                    }
                    self.fworks.currentHue = random(self.fworks.hueMin, self.fworks.hueMax);
                    self.fworks.createFireworks(self.fworks.cw / 2, self.fworks.ch, random(10,self.fworks.cw),random(0,self.fworks.ch/2));
                    dur=((dur*1000-step)/1000);
                },step);

            },
            /**
             * 应用主方法默认为main,不可更改
             * @param  json 参数
             */
            main: function (args) {
                this.getStage().append(this.fworks.canvas);
            }
        });

        PM.addApp(Fireworks);
    })();



