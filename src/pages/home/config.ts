import { createContext, Dispatch, SetStateAction } from 'react';

export enum HomeStepType {
  Unset = 0,
  FadeIn = 1,
}

export enum HomePageType {
  Landing = 0,
  Question = 1,
}

export type THomeState = {
  step: HomeStepType;
  page: HomePageType;
  question: number;
  answers: number[];
};
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState: THomeState = {
  step: HomeStepType.Unset,
  page: HomePageType.Landing,
  question: 0,
  answers: [],
};
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);

export const HomeQuestions = [
  [
    '立刻處理到一塵不染，不留任何污點!',
    '全境搜索！擴大清潔範圍',
    '把燈光全部開啟，看清楚臟污在哪裡',
    '判斷臟污類型，靈活切換清潔工具對付',
    '只要一個指令，簡單省事達成清潔任務',
  ],
  [
    '容不下一粒灰塵，一臟掉就要回歸原貌',
    '各種死角地形都要貫徹乾淨！',
    '任何光線下都乾淨無瑕',
    '從縫隙到床鋪到高處都很要求',
    '少即是多，追求簡單俐落',
  ],
  [
    '清潔就該講求結果，看得見的乾淨最重要',
    '清潔就像征服一場戰役，哪裡臟就往哪裡攻',
    '很重視細節，尤其容易忽略的地方更要注意',
    '清潔要顧到方方面面，要靈活、多角度',
    '清潔是生活減法，才能留下必要的純粹',
  ],
  [
    '追求完美，把家打掃得像新房子',
    '活力滿滿，每個角落都勤奮清潔',
    '用智慧判斷，不錯放每個細節',
    '多元靈活，針對不同生活場景彈性應變',
    '一派輕松，善用最省力的方式',
  ],
  [
    '強力吸附，毛髮無纏繞',
    '深層清潔，地毯、縫隙都能清',
    '結合智慧科技，強化清潔效率',
    '五機合一，靈活變身多功能',
    '輕巧簡潔，一鍵完成',
  ],
];
