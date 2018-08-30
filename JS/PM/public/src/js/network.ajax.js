(function () {

        function ajax(opt)
        {
            $.ajax(opt);
        };

        window['network']=window['network']||{};
        window['network']['ajax']=ajax;
    }

)();
