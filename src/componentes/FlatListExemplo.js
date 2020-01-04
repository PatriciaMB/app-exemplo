import React from 'react';
import {SafeAreaView,TouchableOpacity,FlatList,StyleSheet,Text,} from 'react-native';

const DATA = [
    { id: 1, nome: 'Ana',        nota: 7.09 },
    { id: 2, nome: 'João',       nota: 10 },
    { id: 3, nome: 'Paula',      nota: 4.3 },
    { id: 4, nome: 'Pedro',      nota: 7.8 },
    { id: 5, nome: 'Marcos',     nota: 9.9 },
    { id: 6, nome: 'Bruna',      nota: 4.7 },
    { id: 7, nome: 'Lucas',      nota: 6.9 },
    { id: 8, nome: 'Fernanda',   nota: 8.5 },
    { id: 9, nome: 'Ingrid',     nota: 9.4 },
    { id: 10, nome: 'Rafael',    nota: 4.8 },
    { id: 11, nome: 'Monica',    nota: 2.9 },
    { id: 12, nome: 'Luiza',     nota: 7.2 },
    { id: 13, nome: 'Guilherme', nota: 3.7 },
    { id: 14, nome: 'Rebeca',    nota: 8.9 },
    { id: 15, nome: 'Roberto',   nota: 5.7 },
    { id: 16, nome: 'Claudia',   nota: 10 },
    { id: 17, nome: 'Gustavo',   nota: 8 },
    { id: 18, nome: 'Carlos',    nota: 3.6 },
    { id: 19, nome: 'Prisila',   nota: 9 },
];

function Item({ id, nome, nota, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[styles.item,{ backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },]}>
      <Text style={styles.title}>Nome: {nome} </Text>
      <Text style={styles.nota}>Nota: {nota} </Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            nome={item.nome}
            nota={item.nota}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  nota: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
  },
});
