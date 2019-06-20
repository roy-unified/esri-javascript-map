// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define({regions:"\u0420\u0435\u0433\u0438\u043e\u043d\u044b",header:{sectionTitles:{all:"ArcGIS Online",myContent:"\u041c\u043e\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",myFavorites:"\u041c\u043e\u0435 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",myGroups:"\u041c\u043e\u0438 \u0433\u0440\u0443\u043f\u043f\u044b",myOrganization:"\u041c\u043e\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f",livingAtlas:"Living Atlas",subscription:"\u0420\u0435\u0441\u0443\u0440\u0441 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"},
browse:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",search:"\u041f\u043e\u0438\u0441\u043a",filterFolders:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043f\u0430\u043f\u043e\u043a",allFolders:"\u0412\u0441\u0435 \u043c\u043e\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",filterGroups:"\u0424\u0438\u043b\u044c\u0442\u0440 \u0433\u0440\u0443\u043f\u043f",allGroups:"\u0412\u0441\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u043c\u043e\u0438\u0445 \u0433\u0440\u0443\u043f\u043f"},resultCount:"\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",
searchPlaceholders:{generic:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0438\u0441\u043a\u0430"},filterChips:{mapArea:"\u0412 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043a\u0430\u0440\u0442\u044b",type:"\u0422\u0438\u043f",dateModified:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u043e",dateCreated:"\u0421\u043e\u0437\u0434\u0430\u043d\u043e",access:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e",group:"\u0413\u0440\u0443\u043f\u043f\u0430",
folder:"\u041f\u0430\u043f\u043a\u0430",status:"\u0421\u0442\u0430\u0442\u0443\u0441",clearAll:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435",category:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",region:"\u0420\u0435\u0433\u0438\u043e\u043d",tagged:"\u0422\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439"},sortOptions:{sort:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",sortBy:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u043f\u043e",
sortDir:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",relevance:"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",owner:"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446",created:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",modified:"\u0414\u0430\u0442\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",
numviews:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432",avgrating:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",ascending:{relevance:"\u041f\u043e \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438",title:"\u041f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",owner:"\u041f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",created:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435",
modified:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435",numviews:"\u041e\u0442 \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0433\u043e \u043a \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u043c\u0443",avgrating:"\u041e\u0442 \u043d\u0438\u0437\u0448\u0435\u0433\u043e \u043a \u0432\u044b\u0441\u0448\u0435\u043c\u0443"},descending:{relevance:"\u041e\u0442 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0433\u043e \u043a \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u043c\u0443",
title:"\u041f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435",owner:"\u041f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435",created:"\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435",modified:"\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435",numviews:"\u041e\u0442 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0433\u043e \u043a \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u043c\u0443",
avgrating:"\u041e\u0442 \u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043a \u043d\u0438\u0437\u0448\u0435\u043c\u0443"}},itemDetails:{addToMap:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a \u043a\u0430\u0440\u0442\u0435",removeFromMap:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043a\u0430\u0440\u0442\u044b",by:"\u043e\u0442",lastModified:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e",noSnippet:"\u041a\u0440\u0430\u0442\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0435 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430.",
details:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",termsOfUse:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",attribution:"\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u0431 \u0430\u0432\u0442\u043e\u0440\u0430\u0445",noTermsOfUse:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u043e\u0441\u043e\u0431\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
noAttribution:"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0430 \u0442\u0440\u0435\u0442\u044c\u0438\u0445 \u043b\u0438\u0446.",noDescription:"\u041f\u043e\u043b\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e.",views:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432",
created:"\u0421\u043e\u0437\u0434\u0430\u043d\u043e",sharedWith:"\u041e\u0431\u0449\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043b\u044f",shared:{"public":"\u0414\u043b\u044f \u0432\u0441\u0435\u0445 (\u043e\u0431\u0449\u0438\u0439)",org:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f",shared:"\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u0449\u0435\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u0435.",
"private":"\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u0449\u0435\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u0435."},viewUser:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",viewOrg:"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e",
addToFavorites:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",removeFromFavorites:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e",managedBy:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f:"},results:{loadingItems:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432..",requestError:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435.",
noItemsFound:"\u041d\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c. \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u044b, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432.",
empty:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u044b \u0432\u044b\u0448\u0435, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u0438\u0441\u043a."},search:"\u041f\u043e\u0438\u0441\u043a",close:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",filterPane:{filter:"\u0424\u0438\u043b\u044c\u0442\u0440",mapArea:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043a\u0430\u0440\u0442\u044b",
orgGroups:"\u0413\u0440\u0443\u043f\u043f\u044b \u043c\u043e\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438",categories:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",groupCategories:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0433\u0440\u0443\u043f\u043f\u044b"},viewDetails:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0431 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0435",
back:"\u041d\u0430\u0437\u0430\u0434",compact:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430",compactView:"\u041a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u044b\u0439 \u0432\u0438\u0434",list:"\u0421\u043f\u0438\u0441\u043e\u043a",listView:"\u0421\u043f\u0438\u0441\u043e\u043a",showing:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f",viewResults:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"});