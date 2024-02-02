import { useLottie } from "lottie-react";
import OnlineStatusAnim from "./Animations/OnlineAnimation.json";
import OfflineStatusAnim from "./Animations/NetworkDownAnimation.json";

const ShowOnlineOffileAnimation = (props) => {

  console.log('props',props)
  const optionsOnline = {
    animationData: OnlineStatusAnim,
    loop: true,
  };

  const optionsOffline = {
    animationData: OfflineStatusAnim,
    loop: true,
  };

  const { View } = useLottie(props.online?optionsOnline:optionsOffline);

  return <>{View}</>;
};

export default ShowOnlineOffileAnimation;