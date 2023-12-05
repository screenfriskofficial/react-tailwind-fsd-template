import {Suspense} from "react";

export const Loadable = (Component:any) => {
  return function fn(args:any) {
    return <Suspense fallback={<strong>...loading</strong>}>
      <Component {...args}/>
    </Suspense>
  }
}