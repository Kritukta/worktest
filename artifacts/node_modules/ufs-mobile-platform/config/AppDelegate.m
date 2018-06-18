#import "AppDelegate.h"
#import <UFSLibrary/UFSMobilePlatform.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [UFSMobilePlatform initializeWithAppDelegate:self
                                   launchOptions:launchOptions
                                         devMode:YES];
    return YES;
}

@end
