1、安装

npm install ng2-pagination --save
2、模块中配置（app.module.ts)

...
import {Ng2PaginationModule} from 'ng2-pagination';
@NgModule({
    imports: [
        Ng2PaginationModule
    ]
}）
...
3、页面中配置使用

<!--显示分页内容-->
<!--collection是组件中定义的数组或者数组对象，提供的数据-->
<ul>
  <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }">{{item}}</li>
</ul>
<!--单机分页事件-->
<pagination-controls (pageChange)="p = $event"></pagination-controls>
4、配置中文，因为默认上一页下一页等都是英文，所以需要配置

node_modules/ng2-pagination/dist/pagination-controls.component.js
