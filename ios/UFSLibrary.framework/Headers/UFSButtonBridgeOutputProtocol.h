//
//  UFSButtonBridgeOutputProtocol.h
//  UFSPlatform
//
//  Created by Burmistrova Yana on 21.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import "UFSButtonType.h"

NS_ASSUME_NONNULL_BEGIN

@protocol UFSButtonBridgeOutputProtocol <NSObject>

@required
- (void)setType:(UFSButtonType)type;
- (void)setTitle:(NSString *)title;
- (void)setDisabled:(BOOL)disabled;

@end

NS_ASSUME_NONNULL_END
