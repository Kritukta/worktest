//
//  UFSButtonBridgeInputProtocol.h
//  UFSPlatform
//
//  Created by Burmistrova Yana on 21.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import "UFSButtonViewReactProtocol.h"

@class UFSButtonView;

NS_ASSUME_NONNULL_BEGIN

@protocol UFSButtonBridgeInputProtocol <NSObject>

@required
- (void)buttonDidTouchUpInside:(id<UFSButtonViewReactProtocol>)button;

@end

NS_ASSUME_NONNULL_END
