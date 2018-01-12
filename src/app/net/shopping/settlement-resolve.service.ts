// import { Injectable }                      from '@angular/core';
// import { Router, Resolve,
//          ActivatedRouteSnapshot }          from '@angular/router';
//
// import { CartsDataService }                from "../service/carts-data.service";
//
// @Injectable()
// export class SettlementResolve implements Resolve<any> {
//   constructor(private cartsDataService: CartsDataService,
//               private router: Router) {}
//
//   getData() {
//     return Promise.resolve(this.cartsDataService.getCarts())
//   }
//
//   resolve(route: ActivatedRouteSnapshot): Promise<any>|boolean {
//     return this.getData().then(data => {
//       if (data.length > 0) {
//           console.log("提前获取数据",data);
//         return data;
//       } else {
//         this.router.navigate(['/shopping/goods']);
//         return false;
//       }
//     });
//   }
// }
