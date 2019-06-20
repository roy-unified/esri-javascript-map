// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define({colorRamps:{none:"\u306a\u3057",blackToWhite_predefined:"\u9ed2\u304b\u3089\u767d",yellowToRed_predefined:"\u9ec4\u304b\u3089\u8d64",slope_predefined:"\u50be\u659c\u89d2",aspect_predefined:"\u50be\u659c\u65b9\u5411",errors_predefined:"\u30a8\u30e9\u30fc",heatmap1_predefined:"\u30d2\u30fc\u30c8\u30de\u30c3\u30d7 #1",elevation1_predefined:"\u9ad8\u3055 #1",elevation2_predefined:"\u9ad8\u3055 #2",blueBright_predefined:"\u9752 (\u660e\u308b\u3044)",blueLightToDark_predefined:"\u9752 (\u6de1\u304b\u3089\u6fc3)",
blueGreenBright_predefined:"\u9752\u7dd1 (\u660e\u308b\u3044)",blueGreenLightToDark_predefined:"\u9752\u7dd1 (\u6de1\u304b\u3089\u6fc3)",brownLightToDark_predefined:"\u8336 (\u6de1\u304b\u3089\u6fc3)",brownToBlueGreenDivergingBright_predefined:"\u8336\u304b\u3089\u9752\u7dd1 \u5206\u6563 (\u660e\u308b\u3044)",brownToBlueGreenDivergingDark_predefined:"\u8336\u304b\u3089\u9752\u7dd1 \u5206\u6563 (\u6697\u3044)",coefficientBias_predefined:"Coefficient Bias",coldToHotDiverging_predefined:"\u51b7\u304b\u3089\u6e29 \u5206\u6563",
conditionNumber_predefined:"Condition Number",cyanToPurple_predefined:"\u30b7\u30a2\u30f3\u304b\u3089\u7d2b",cyanLightToBlueDark_predefined:"\u30b7\u30a2\u30f3 (\u6de1) \u304b\u3089\u9752 (\u6fc3)",distance_predefined:"\u8ddd\u96e2",grayLightToDark_predefined:"\u30b0\u30ec\u30fc (\u6de1\u304b\u3089\u6fc3)",greenBright_predefined:"\u7dd1 (\u660e\u308b\u3044)",greenLightToDark_predefined:"\u7dd1 (\u6de1\u304b\u3089\u6fc3)",greenToBlue_predefined:"\u7dd1\u304b\u3089\u9752",orangeBright_predefined:"\u30aa\u30ec\u30f3\u30b8 (\u660e\u308b\u3044)",
orangeLightToDark_predefined:"\u30aa\u30ec\u30f3\u30b8 (\u6de1\u304b\u3089\u6fc3)",partialSpectrum_predefined:"\u90e8\u5206\u30b9\u30da\u30af\u30c8\u30eb",partialSpectrum1Diverging_predefined:"\u90e8\u5206\u30b9\u30da\u30af\u30c8\u30eb 1 \u5206\u6563",partialSpectrum2Diverging_predefined:"\u90e8\u5206\u30b9\u30da\u30af\u30c8\u30eb 2 \u5206\u6563",pinkToYellowGreenDivergingBright_predefined:"\u30d4\u30f3\u30af\u304b\u3089\u9ec4\u7dd1 \u5206\u6563 (\u660e\u308b\u3044)",pinkToYellowGreenDivergingDark_predefined:"\u30d4\u30f3\u30af\u304b\u3089\u9ec4\u7dd1 \u5206\u6563 (\u6697\u3044)",
precipitation_predefined:"\u964d\u96e8",prediction_predefined:"Prediction",purpleBright_predefined:"\u7d2b (\u660e\u308b\u3044)",purpleToGreenDivergingBright_predefined:"\u7d2b\u304b\u3089\u7dd1 \u5206\u6563 (\u660e\u308b\u3044)",purpleToGreenDivergingDark_predefined:"\u7d2b\u304b\u3089\u7dd1 \u5206\u6563 (\u6697\u3044)",purpleBlueBright_predefined:"\u9752\u7d2b (\u660e\u308b\u3044)",purpleBlueLightToDark_predefined:"\u9752\u7d2b (\u6de1\u304b\u3089\u6fc3)",purpleRedBright_predefined:"\u8d64\u7d2b (\u660e\u308b\u3044)",
purpleRedLightToDark_predefined:"\u8d64\u7d2b (\u6de1\u304b\u3089\u6fc3)",redBright_predefined:"\u8d64 (\u660e\u308b\u3044)",redLightToDark_predefined:"\u8d64 (\u6de1\u304b\u3089\u6fc3)",redToBlueDivergingBright_predefined:"\u8d64\u304b\u3089\u9752 \u5206\u6563 (\u660e\u308b\u3044)",redToBlueDivergingDark_predefined:"\u8d64\u304b\u3089\u9752 \u5206\u6563 (\u6697\u3044)",redToGreen_predefined:"\u8d64\u304b\u3089\u7dd1",redToGreenDivergingBright_predefined:"\u8d64\u304b\u3089\u7dd1 \u5206\u6563 (\u660e\u308b\u3044)",
redToGreenDivergingDark_predefined:"\u8d64\u304b\u3089\u7dd1 \u5206\u6563 (\u6697\u3044)",spectrumFullBright_predefined:"\u30d5\u30eb \u30b9\u30da\u30af\u30c8\u30eb (\u660e\u308b\u3044)",spectrumFullDark_predefined:"\u30d5\u30eb \u30b9\u30da\u30af\u30c8\u30eb (\u6697\u3044)",spectrumFullLight_predefined:"\u30d5\u30eb\u30b9\u30da\u30af\u30c8\u30eb (\u6de1\u3044)",surface_predefined:"\u30b5\u30fc\u30d5\u30a7\u30b9",temperature_predefined:"\u6c17\u6e29",whiteToBlack_predefined:"\u767d\u304b\u3089\u9ed2",
yellowToDarkRed_predefined:"\u9ec4\u304b\u3089\u6fc3\u3044\u8d64",yellowToGreenToDarkBlue_predefined:"\u9ec4\u3001\u7dd1\u304b\u3089\u6fc3\u3044\u9752",yellowGreenBright_predefined:"\u9ec4\u7dd1 (\u660e\u308b\u3044)",yellowGreenLightToDark_predefined:"\u9ec4\u7dd1 (\u6de1\u304b\u3089\u6fc3)"}});