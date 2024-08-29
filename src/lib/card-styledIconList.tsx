import { StyledIconText } from '../types/styledIconTxt';
import IconWithText from './styledIconText';

export type Props = {
  data: {
    headerTxt: string;
    iconTexts: StyledIconText[];
  };
};

export const StyledIconListCard = ({ data }: Props) => {
  let { headerTxt, iconTexts } = data;
  let iclass = 'fill-blueish-dark'
  return (
    <div className='flex flex-col'>
      {headerTxt}
      {iconTexts.map((icotxt, idx) => <IconWithText key={idx} icon={icotxt.icon} iconClass={iclass} text={icotxt.text}/>)}
    </div>
  );
};
