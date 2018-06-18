import React from 'react'

import {IFullScreenErrorProps, FullScreenError} from "mrmkmcib-app"


/*
* @description - функция выводит ошибку в полноэкранном режиме.
* @param {fullScreenError}
* @applicable:
    - Функция принимает значения согласно интерфейсу IFullScreenErrorProps: идентификатор, название ошибки, 
    описание ошибки и функцию, которая будет выполнена при нажатии на кнопку Повтор. 
*/
export const getFullScreenError = (fullScreenErrorProps: IFullScreenErrorProps): React.ReactElement<FullScreenError> => (
 <FullScreenError testID={fullScreenErrorProps.testID}
    title={
        fullScreenErrorProps.title ?
        fullScreenErrorProps.title :
           'Попробуйте снова или обратитесь в службу поддержки.'
    }
    description={
        fullScreenErrorProps.description ?
        fullScreenErrorProps.description :
            null
    }
    onRefresh={fullScreenErrorProps.onRefresh}
/>
)