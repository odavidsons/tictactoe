import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
var board = ["", "", "", "", "", "", "", "", ""];

var player1 = "";
var player2 = "";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: true,
      player1Name: "",
      player2Name: "",
      turn: "Jogador 1",
      show: false,
    };
  }

  drawItem(number) {
    if (board[number] == "" && this.winGame() == "") {
      if (this.state.isCross) board[number] = "cross";
      else board[number] = "circle";

      this.setState({ isCross: !this.state.isCross });
      if (this.winGame() != "") {
        if (this.winGame() === "cross") {
          Alert.alert(this.state.player1Name + " ganhou");
        } else if (this.winGame() === "circle") {
          Alert.alert(this.state.player2Name + " ganhou");
        }
      } else Alert.alert("Empate!");
    }
    if (this.state.turn === "player1") {
      this.setState({ turn: this.state.player1Name });
    } else {
      this.setState({ turn: this.state.player2Name });
    }
  }

  showTurn() {
    if (turn === this.state.player1Name) return this.state.player1Name;
    else return this.state.player2Name;
  }

  resetGame = () => {
    this.setState({ isCross: true });
    board = ["", "", "", "", "", "", "", "", ""];
  };

  chooseItemColor = (number) => {
    if (board[number] == "cross") return "#black";
    else if (board[number] == "circle") return "#black";

    return "#black";
  };

  winGame = () => {
    if (board[0] != "" && board[0] == board[1] && board[1] == board[2]) {
      return board[0];
    } else if (board[3] != "" && board[3] == board[4] && board[4] == board[5]) {
      return board[3];
    } else if (board[6] != "" && board[6] == board[7] && board[7] == board[8]) {
      return board[6];
    } else if (board[0] != "" && board[0] == board[3] && board[3] == board[6]) {
      return board[0];
    } else if (board[1] != "" && board[1] == board[4] && board[4] == board[7]) {
      return board[1];
    } else if (board[2] != "" && board[2] == board[5] && board[5] == board[8]) {
      return board[2];
    } else if (board[0] != "" && board[0] == board[4] && board[4] == board[8]) {
      return board[0];
    } else if (board[2] != "" && board[2] == board[4] && board[4] == board[6]) {
      return board[2];
    } else {
      return "";
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Nome do jogador 1:</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(player1Name) => this.setState({ player1Name })}
            value={this.state.player1Name}
          />
          <Text>Nome do jogador 2:</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(player2Name) => this.setState({ player2Name })}
            value={this.state.player2Name}
          />
        </View>
        <Text
          visible={this.state.show}
          style={{ color: "#black", fontSize: 50, paddingBottom: 25 }}
        >
          Jogo do galo
        </Text>
        <Text style={{ paddingBottom: 10 }}>
          Vez do jogador {this.state.turn}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.drawItem(0)}
          >
            <Entypo name={board[0]} size={32} color={this.chooseItemColor(0)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.drawItem(1)}
          >
            <Entypo name={board[1]} size={32} color={this.chooseItemColor(1)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.drawItem(2)}
          >
            <Entypo name={board[2]} size={32} color={this.chooseItemColor(2)} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.drawItem(3)}
          >
            <Entypo name={board[3]} size={32} color={this.chooseItemColor(3)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.drawItem(4)}
          >
            <Entypo name={board[4]} size={32} color={this.chooseItemColor(4)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.drawItem(5)}
          >
            <Entypo name={board[5]} size={32} color={this.chooseItemColor(5)} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.drawItem(6)}
          >
            <Entypo name={board[6]} size={32} color={this.chooseItemColor(6)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.drawItem(7)}
          >
            <Entypo name={board[7]} size={32} color={this.chooseItemColor(7)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => this.drawItem(8)}
          >
            <Entypo name={board[8]} size={32} color={this.chooseItemColor(8)} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            alignItems: "center",
            margin: 30,
            padding: 20,
            backgroundColor: "#13a180",
            width: 200,
            borderRadius: 20,
          }}
          onPress={() => this.resetGame()}
        >
          <Text style={{ color: "black", fontSize: 25 }}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  tile: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: 100,
    height: 100,
  },
});
