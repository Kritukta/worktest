//
//  UFSButtonViewManager.h
//  UFSPlatform
//
//  Created by Daniel Kalintsev on 21.09.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import "UFSVisualComponentViewManager.h"
#import "UFSButtonBridgeInputProtocol.h"

/**
 *  UFSButtonViewManager is supporting brdige between UFSButton.js and UFSButtonView
 *	@see UFSButtonView
 */

NS_ASSUME_NONNULL_BEGIN

@interface UFSButtonViewManager : UFSVisualComponentViewManager <UFSButtonBridgeInputProtocol>
@end

NS_ASSUME_NONNULL_END
