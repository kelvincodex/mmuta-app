import React, {ReactElement} from "react";

export interface NavigationLayoutProps {
    screens: any[],
    initialRouteName: string
}

export interface BaseRouteProps {
    name: string,
    component: React.FC<ReactElement>,
    options: object
}

type OptionsProps = {

}

