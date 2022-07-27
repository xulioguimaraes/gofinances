import { ISessionText } from "../screens/Verme/Verme";

export declare global {
  namespace ReactNavigation {
    export interface RootParamList {
      home: undefined;
      vermes: undefined;
      question: undefined;
      credits: undefined;
      glossario: undefined;
      verme: { vermeId: number };
      session: ISessionText;
    }
  }
}
