//
//  UFSErrorCodeStringifierProtocol.h
//  UFSPlatform
//
//  Created by Denis Smirnov on 07.10.16.
//  Copyright © 2016 SberTech. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol UFSErrorCodeStringifierProtocol <NSObject>
@required
/*!
 * @discussion Returns error code string for corresponding error code.
 * @param code UFSError code.
 */
+ (NSString *)stringCodeForCode:(NSInteger)code;

@end
