import React from 'react';
import { Icon, View, IconType, Text, Button, TableRow, TableCell, } from 'ufs-mobile-platform';
import Styles from './styles/OneLineCellStyles';
export const OneLineCell = (props) => (React.createElement(TableRow, { testID: 'test-id-98ec8265-bb37-e638-6554-c2367cd4f0fe', onClick: props.onClick || (() => { }), style: [
        props.data.isFetching ? Styles.BackgroundColorGrey : Styles.BackgroundColorDefault,
    ] },
    React.createElement(TableCell, { testID: 'test-id-97d95344-7f6a-f16c-6d5b-cd395eac42bf', style: [
            props.indented ? Styles.TableCellIndented : Styles.TableCell,
        ] },
        React.createElement(View, { testID: 'test-id-8542f10b-b6b0-8059-069f-6d650e4b8d2e', style: [
                Styles.InlineWrapperColumns,
            ] },
            React.createElement(View, { testID: 'test-id-8542f10b-b6b0-8059-069f-6d650e4b8d2e', style: Styles.InlineWrapper },
                React.createElement(View, { testID: 'test-id-e3a2e0ec-22c3-606d-25c8-ae07f3a91d7d', style: props.flex || Styles.flex05 },
                    React.createElement(Text, { testID: 'test-id-8166e42c-3946-6233-b946-0f5775c8e49e', style: [
                            Styles.InlineTitle,
                            props.data.isFetching ? Styles.TextColorWhite : Styles.TextColorDefault
                        ], numberOfLines: 1 }, props.data.label)),
                React.createElement(View, { testID: 'test-id-d2f7a61d-9589-af02-c053-0e5037d4126c', style: Styles.InlineRight },
                    React.createElement(View, { testID: 'test-id-9b0725bc-3b1a-2a5a-4c93-f572bcbecb4a', style: Styles.InlineRight },
                        React.createElement(Text, { testID: 'test-id-e373f609-5de9-db74-2cca-11b058d33fe9', style: [
                                Styles.InlineValue,
                                props.data.isFetching ? Styles.TextColorWhite : Styles.TextColorDefault
                            ], numberOfLines: 1 }, props.data.isFetching ? 'Загрузка...' : props.data.value))),
                props.onClick ?
                    React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e', onExecute: props.onClick },
                        React.createElement(Icon, { testID: 'test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb', type: IconType.MrmLink, disabled: true })) :
                    React.createElement(View, { testID: 'test-id-b3af3226-53ce-44ac-8ec0-841cf294e17d', style: Styles.EmptyView })),
            !props.data.isFetching && props.data.errorText ?
                React.createElement(View, { testID: 'test-id-8166e42c-3946-6233-b946-0f5775c8e49e', style: Styles.ErrorTextWrapper03 },
                    React.createElement(Text, { testID: 'test-id-8166e42c-3946-6233-b946-0f5775c8e49e', style: Styles.ErrorText, numberOfLines: 1 }, props.data.errorText))
                :
                    null))));
//# sourceMappingURL=OneLineCell.js.map