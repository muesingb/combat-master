import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Button } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Toggle } from "../../components/Toggle";
import { movement } from "../../components/movement";
import { MoveCounter } from "../../components/MoveCounter";
import { updateSelectedMovement } from "../../store/actions";

interface MoveScreenProps extends NavigationInjectedProps {}

export const MoveScreen: React.FC<MoveScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const { params } = props.navigation.state;
  const dispatch = useDispatch();

  const [movementInFeet, updateMovementInFeet] = useState(0);

  return (
    <View>
      {movement.map((move, index) => {
        return <Toggle label={move.label} bodyText={move.bodyText} key={index} />;
      })}
      <MoveCounter movementInFeet={movementInFeet} updateMovementInFeet={updateMovementInFeet} />
      <Button
        title="Finished"
        onPress={() => {
          dispatch(updateSelectedMovement(movementInFeet));
          navigate("MainCombatAction");
        }}
      />
    </View>
  );
};

MoveScreen.navigationOptions = { title: "Move" };
