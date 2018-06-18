/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { CenterPageHeader, ContentPanel, H2, NavigationTextButton, Page, RightPageHeader, SplitPanel, View, } from 'ufs-mobile-platform';
import Styles from './styles/ProductPaymentAccountStyles';
import * as util from '../../common/Util';
const ProductPaymentAccount = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-ProductPaymentAccount' },
    React.createElement(SplitPanel, { testID: 'test-id-88366530-6fa5-e5b5-a8a6-7b5097ea1e43', id: "ProductAcquiring" },
        React.createElement(ContentPanel, { testID: 'test-id-0ecd4aee-471c-4038-0ea9-851118fe2875', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-c8a1e252-2b1e-441b-2384-ca90e6f403ad', scrollEnabled: true, content: React.createElement(View, { testID: 'test-id-c8a1e252-2b1e-441b-2384-ca90e6f403ad' }) },
                React.createElement(RightPageHeader, { testID: 'test-id-d95b00e5-c6d2-e0f7-247f-c6944eef5f40' },
                    React.createElement(NavigationTextButton, { testID: 'test-id-491c5c5e-b927-b09f-fb9d-71f50c44eb8b', title: "Готово", onExecute: props.onTapClose })),
                React.createElement(CenterPageHeader, { testID: 'test-id-893967dd-c715-9894-e297-62752498f894' },
                    React.createElement(H2, { testID: 'test-id-cb853c64-21eb-5815-0331-18bb31f4321b' }, util.getProductTypeName(props.data.productType))))))));
export default ProductPaymentAccount;
//# sourceMappingURL=ViewProductPaymentAccount.js.map