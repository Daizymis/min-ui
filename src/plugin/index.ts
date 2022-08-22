import {
    Tabbar,
    TabbarItem,
    Search,
    Picker,
    Field,
    Popover,
    Popup,
    Sticky,
  } from "vant";
  
  import { App } from "vue";
  export function importVant(app: App<Element>) {
    app.use(Tabbar);
    app.use(TabbarItem);
    app.use(Search);
    app.use(Picker);
    app.use(Field);
    app.use(Popover);
    app.use(Popup);
    app.use(Sticky);
  }