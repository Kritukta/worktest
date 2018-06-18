//
//  UFSButtonViewInputProtocol.h
//  UFSPlatform
//
//  Created by Burmistrova Yana on 21.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "UFSIconType.h"
#import "UFSButtonType.h"
#import "UFSButtonState.h"

NS_ASSUME_NONNULL_BEGIN

@protocol UFSButtonViewInputProtocol <NSObject>

@required
- (void)updateToDisableState;
- (void)updateToNormalState;
- (void)updateToHighlightedState;

- (void)setType:(UFSButtonType)type;
- (void)setTitle:(nullable NSString *)title;

- (void)hideTitle;
- (void)showTitle;

@end

NS_ASSUME_NONNULL_END
