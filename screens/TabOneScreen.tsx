import React, { useRef, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, SafeAreaView, Image, ImageSourcePropType } from 'react-native';

import { Text, View } from '../components/Themed';

type carouselProps = {
  title: string,
  text: string,
  filename: ImageSourcePropType
}

type viewPortProps = {
  width: any,
  height: any
}

type stateProps = {
  activeIndex: number,
  carouselItems: Array<carouselProps>,
  viewPort: viewPortProps
}

export default function TabOneScreen() {
  const { width, height } = Dimensions.get('window');
  const carouselRef = useRef<any>(null);
  const [state, setState] = useState<stateProps>({
    activeIndex: 0,
    carouselItems: [
      {
        title: "Neknaks 1",
        text: "Neknaks 1",
        filename: require("../assets/images/neknaks/1.jpg"),
      },
      {
        title: "Neknaks 2",
        text: "Neknaks 2",
        filename: require("../assets/images/neknaks/2.jpg"),
      },
      {
        title: "Neknaks 3",
        text: "Neknaks 3",
        filename: require("../assets/images/neknaks/3.jpg"),
      },
      {
        title: "Neknaks 4",
        text: "Neknaks 4",
        filename: require("../assets/images/neknaks/4.jpg"),
      },
      {
        title: "Neknaks 5",
        text: "Neknaks 5",
        filename: require("../assets/images/neknaks/5.jpg"),
      },
      {
        title: "Neknaks 6",
        text: "Neknaks 6",
        filename: require("../assets/images/neknaks/6.jpg"),
      },
      {
        title: "Neknaks 7",
        text: "Neknaks 7",
        filename: require("../assets/images/neknaks/7.jpg"),
      },
      {
        title: "Neknaks 8",
        text: "Neknaks 8",
        filename: require("../assets/images/neknaks/8.jpg"),
      },
    ],
    viewPort: {
      width,
      height
    }
  })

  const _renderItem = ({ item, index }: { item: carouselProps, index: number }) => {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 300,
        padding: 0,
        marginLeft: 25,
        marginRight: 25,
      }}>
        <Image resizeMode="cover" style={styles.image} source={item.filename} />
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 30 }}>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>

    )
  }

  const onSnapToItem = (index: number) => setState({ ...state, activeIndex: index })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50, }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Carousel
          layout={"tinder"}
          ref={carouselRef}
          data={state.carouselItems}
          sliderWidth={state.viewPort.width}
          itemWidth={state.viewPort.width}
          renderItem={_renderItem}
          onSnapToItem={onSnapToItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'floralwhite',
  },
  image: {
    width: '100%',
    height: 200,
  }
});
