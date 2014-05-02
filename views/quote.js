FXChange.quote = function (params) {
    var viewModel = {
        //  Put the binding properties here
        selectedTab: ko.observable(0)
        , selectedCcy: ko.observable('AUD')
        , selectedCcyQuoteType: ko.observable('TT')
        , selectedShop: ko.observable('FX0')
        , selectedShopQuoteType: ko.observable('TT')

        , header_listCcyTitle: [{
            title: Globalize.localize('Shop')
            , bid: Globalize.localize('Bid')
            , ask: Globalize.localize('Ask')
            , time: Globalize.localize('UpdTime')
        }]

        , header_listShopTitle: [{
            title: Globalize.localize('Currency')
            , bid: Globalize.localize('Bid')
            , ask: Globalize.localize('Ask')
            , time: Globalize.localize('UpdTime')
        }]

        , quoteTypes: [
            { text: Globalize.localize('TT'), value: 'TT' }
            , { text: Globalize.localize('Cash'), value: 'CASH' }
            ]

        , datasource_header: function () {
            if (this.selectedTab() == 1) {
                return this.header_listCcyTitle;
            } else {
                return this.header_listShopTitle;
            }
        }

        , ccys: [
            { id: 'AUD', name: Globalize.localize('CCY_AUD') }
            , { id: 'CAD', name: Globalize.localize('CCY_CAD') }
            , { id: 'CHF', name: Globalize.localize('CCY_CHF') }
            , { id: 'CNY', name: Globalize.localize('CCY_CNY') }
            , { id: 'DKK', name: Globalize.localize('CCY_DKK') }
            , { id: 'EUR', name: Globalize.localize('CCY_EUR') }
            , { id: 'GBP', name: Globalize.localize('CCY_GBP') }
            , { id: 'JPY', name: Globalize.localize('CCY_JPY') }
            , { id: 'NOK', name: Globalize.localize('CCY_NOK') }
            , { id: 'NZD', name: Globalize.localize('CCY_NZD') }
            , { id: 'SEK', name: Globalize.localize('CCY_SEK') }
            , { id: 'SGD', name: Globalize.localize('CCY_SGD') }
            , { id: 'USD', name: Globalize.localize('CCY_USD') }
        ]

        , shops: [
            { id: 'FX0', name: Globalize.localize('SHOP_FX0') }
            , { id: 'FX1', name: Globalize.localize('SHOP_FX1') }
            , { id: 'HSBC', name: Globalize.localize('SHOP_HSBC') }
        ]

        , tabsItemClicked: function () {
            if (this.selectedTab() == 0) {
                this.loadShopQuotes();
            } else {
                this.loadCcyQuotes();
            }
            // DevExpress.ui.notify(this.selectedTab(), 'info', 1000);
            // alert(this.selectedTab());
        }

        , loadShopQuotes: function () {
            this.dataSourceShopQuotes.load();
        }

        , loadCcyQuotes: function () {
            this.dataSourceCcyQuotes.load();
        }

        , quotes_ccy: [
            { title: 'Item1', bid: 123.4, ask: 124.4, time: '14:48@22' }
            , { title: 'Item2', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item3', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item4', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item5', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item6', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item7', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item8', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item9', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item10', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item11', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item12', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item13', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item14', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'Item15', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            ]

        , quotes_shop: [
            { title: 'USD', bid: 123.4, ask: 124.4, time: '14:48@22' }
            , { title: 'AUD', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'CNY', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            , { title: 'EUR', bid: 10.23456, ask: 10.23487, time: '14:49@22' }
            ]

        , urlGetQuotes: function () {
            var reqTime = new Date().valueOf();
            reqTime = reqTime - (reqTime % 5000)
            // alert(reqTime);
            // return 'http://127.0.0.1/fx-web/GetFXQuotes.aspx?req_time=' + reqTime;
            return 'http://www.fx-change.com/fx-web/GetFXQuotes.aspx?req_time=' + reqTime;
        }

        , dataSourceShopQuotes: new DevExpress.data.DataSource({
            load: function (loadOptions) {
                var dfd = new $.Deferred();
                if (loadOptions.refresh) {
                    var shop = encodeURIComponent(viewModel.selectedShop());
                    var quote_type = encodeURIComponent(viewModel.selectedShopQuoteType());
                    $.getJSON(viewModel.urlGetQuotes() + '&shop=' + shop + '&quote_type=' + quote_type)
                        .done(function (result) {
                            // DevExpress.ui.notify('load By Shop ' + loadOptions.refresh, 'info', 1000);
                            // alert(result);
                            $.each(result, function () {
                                this.title = Globalize.localize('CCY_' + this.title);
                            });
                            dfd.resolve(result);
                        })
                        .fail(function (error) {
                            // handle error
                            DevExpress.ui.notify(Globalize.localize('Err.Connect'), 'error', 1000);
                            dfd.resolve(null);
                        })
                        ;
                    var result = dfd.promise();
                    return result;
                }
            }
        })

        , dataSourceCcyQuotes: new DevExpress.data.DataSource({
            load: function (loadOptions) {
                var dfd = new $.Deferred();
                if (loadOptions.refresh) {
                    var ccy = encodeURIComponent(viewModel.selectedCcy() + '.HKD');
                    var quote_type = encodeURIComponent(viewModel.selectedCcyQuoteType());
                    // alert(viewModel.urlGetQuotes() + '&ccy=' + ccy + '&quote_type=' + quote_type);
                    $.getJSON(viewModel.urlGetQuotes() + '&ccy=' + ccy + '&quote_type=' + quote_type)
                        .done(function (result) {
                            // DevExpress.ui.notify('load By Shop ' + loadOptions.refresh, 'info', 1000);
                            // alert(result);
                            $.each(result, function () {
                                this.title = Globalize.localize('SHOP_' + this.title);
                            });
                            dfd.resolve(result);
                        })
                        .fail(function (error) {
                            // handle error
                            DevExpress.ui.notify(Globalize.localize('Err.Connect'), 'error', 1000);
                            dfd.resolve(null);
                        })
                        ;
                    var result = dfd.promise();
                    return result;
                }
            }
        })

        , calcHeight: function () {
            /*
            var header_height = $('#quote_header').height();
            var tabs_height = $('#quote_tabs').height();
            var content_height = $('#quote_content').height();
            $('#quote_list_ccy').dxList('instance').option('height', content_height - tabs_height - header_height);
            */
        }

        , viewShown: function (e) {
            /*
            // var height = $('#quote_list_ccy').dxList('instance');
            var header_height = $('#quote_header').height();
            var tabs_height = $('#quote_tabs').height();
            var list_height = $('#quote_list_ccy').height();
            alert('old=' + list_height);
            // $('#quote_list_ccy').height(list_height - header_height);
            $('#quote_list_ccy').dxList('instance').option('height', list_height - tabs_height - header_height);
            alert('new=' + $('#quote_list_ccy').height());
            // .option('height')
            //alert(header_height);
            //alert(list_height);
            */
            this.calcHeight();
        }

        , resize: function () {
            this.calcHeight();
        }
    };

    return viewModel;
};