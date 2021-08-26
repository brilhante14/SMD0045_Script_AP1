import React, { useState } from "react";
import { View, LayoutRectangle, Platform, FlatList } from "react-native";
import {
  Container,
  HeaderArea,
  HeaderTitle,
  ViewRow,
  SearchArea,
  HeaderSubTitle,
  StatusBarAndroid,
  PreviewAreaPratos,
  TitlePreview,
} from "./styles";

import { DynamicScrollView } from "../../components/DynamicScrollView";
import { ButtonMain } from "../../components/ButtonMain";
import { TopTabRestaurante } from "../../components/TopBarRestaurante";
import { PreviPrato } from "../../components/PreviaPrato";

import IconRelogio from "../../assets/logoRest.png";
import IconPrato from "../../assets/pratocomida.jpg";


interface Props {
  navigation: any;
}

export function DashboardClient({ navigation }: Props) {
  function find_dimensions(layout: LayoutRectangle) {
    const { height } = layout;
    setHeight(height);
    return height;
  }

  const [height, setHeight] = useState(0);
  const [previaPratosState, setPreviaPratosState] = useState([
    {
      id: 1,
      photo: IconPrato,
      title: "Nome do prato",
      price: "RS40,40",
    },
    {
      id: 2,
      photo: IconPrato,
      title: "Nome do prato",
      price: "RS40,40",
    },
    {
      id: 3,
      photo: IconPrato,
      title: "Nome do prato",
      price: "RS40,40",
    },
  ]);

  return (
    <>
      <Container>
        <TopTabRestaurante logo={IconRelogio} />
        {Platform.OS === "android" ? <StatusBarAndroid /> : <></>}
        <View
          onLayout={(event) => {
            find_dimensions(event.nativeEvent.layout);
          }}
        >
          <HeaderArea>
            <HeaderTitle>Olá usuário!</HeaderTitle>
            <HeaderSubTitle>Realize sua reserva já.</HeaderSubTitle>
          </HeaderArea>
        </View>
        <DynamicScrollView size={height}>
          <SearchArea>
            <ViewRow>
              <ButtonMain
                title="Reservar mesa"
                name={"mesa"}
                screen="Reservas"
              />
              <ButtonMain
                title="Histórico de reservas"
                name={"historico"}
                screen="Histórico"
              />
            </ViewRow>
            <ViewRow>
              <ButtonMain
                title="Consultar cardápio"
                name={"cardapio"}
                screen="Cardápio"
              />
              <ButtonMain
                title="Consultar comanda"
                name={"comanda"}
                screen="Comanda"
              />
            </ViewRow>
          </SearchArea>
          <PreviewAreaPratos>
            <TitlePreview>Prévia dos pratos</TitlePreview>

            <FlatList
              keyExtractor={(item) => String(item.id)}
              data={previaPratosState}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({ item }) => <PreviPrato data={item} />}
            />
          </PreviewAreaPratos>
        </DynamicScrollView>
      </Container>
    </>
  );
}
