/// <reference types="react" />
import { Models as ModelsApp } from 'mrmkmcib-app';
import { Enums } from '../../../Enums';
export interface ISelectClassifierProps {
    performSelect: (value: ModelsApp.Classifier) => void;
    classifierList: ModelsApp.ClassifierList;
    selectedCode: string | undefined | null;
    testID: string;
    navigateBack?: () => void;
    renderMode?: Enums.ClassifierRenderMode | null;
}
export declare const SelectClassifier: (props: ISelectClassifierProps) => JSX.Element;
