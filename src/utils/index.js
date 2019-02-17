import React, { Suspense } from "react";
//import Loading from "../components/common/Loading";

/*
export function loadComponent(Component) {
  // return props => (
  //   <Suspense fallback={<Loading />}>
  //     <Component {...props} />
  //   </Suspense>
  // );
  return props => (
    <Suspense fallback={<></>}>
      <Component {...props} />
    </Suspense>
  );
}
*/

export function loadComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
