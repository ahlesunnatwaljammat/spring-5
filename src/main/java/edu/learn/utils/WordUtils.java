package edu.learn.utils;

public class WordUtils {
    public static String[] randomVerbs(){
        String verbs = "suit,hand,regret,entitle,expect,require,melt,taste,remark,enable,frown,assess,grow,interpret," +
                "dismiss,tear,renew,reward,allow,attract,top,cool,restore,frighten,isolate,dissolve,risk," +
                "serve,follow,gather,explode,approve,represent,build,judge,counter,recognise,classify,undergo,target," +
                "effect,investigation,school,clique,clue,resignation,sailor,countryside,compete,conference," +
                "reflect,hurl,average,first-hand,complication,mention,still,illusion,offer,extent,drive,enemy,bolt," +
                "eliminate,primary,adventure,freckle,slave,view,formulate,discriminate,thirsty,preoccupation,despair," +
                "remember,prosecute,chase,trend,behead,consideration,bee,retire,wish,listen,ease,predict,ignore,urge";
        return verbs.split(",");
    } 
    
    public static String[] randomWords(){
        String words = "effect,investigation,school,clique,clue,resignation,sailor,countryside,compete,conference," +
                "reflect,hurl,average,first-hand,complication,mention,still,illusion,offer,extent,drive,enemy,bolt," +
                "eliminate,primary,adventure,freckle,slave,view,formulate,discriminate,thirsty,preoccupation,despair," +
                "remember,prosecute,chase,trend,behead,consideration,bee,retire";
        return words.split(",");
    }
}
