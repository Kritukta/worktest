//
//  UFSButtonAssembly.h
//  UFSPlatform
//
//  Created by Burmistrova Yana on 25.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import "UFSAssembly.h"
#import "UFSInitialAssemblyProtocol.h"
#import "UFSButtonBridgeInputProtocol.h"
#import "UFSButtonViewInputProtocol.h"

@class UFSView;

NS_ASSUME_NONNULL_BEGIN

@interface UFSButtonAssembly: UFSAssembly <UFSInitialAssemblyProtocol>

- (id<UFSButtonBridgeInputProtocol>)buttonBridge;
- (UFSView<UFSButtonViewInputProtocol> *)buttonViewWithBridge:(nullable id<UFSButtonBridgeInputProtocol>)bridge;
- (id)buttonPresenterWithBridge:(nullable id<UFSButtonBridgeInputProtocol>)bridge;
- (id)buttonInteractorWithBridge:(nullable id<UFSButtonBridgeInputProtocol>)bridge;
- (id)buttonWireframeWithBridge:(nullable id<UFSButtonBridgeInputProtocol>)bridge;

@end

NS_ASSUME_NONNULL_END
