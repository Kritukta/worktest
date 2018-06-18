import React from 'react';
import { Models } from "mrmkmcib-crm";
import * as ModelsCustomer from "../../models/ModelsCustomer";
export interface IProps {
    itemList: Models.HierarchyList;
    onTapItem: ModelsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN;
    testID: string;
}
declare const Hierarchy: React.StatelessComponent<IProps>;
export default Hierarchy;
