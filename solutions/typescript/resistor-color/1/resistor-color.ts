export const COLORS = [
  'black',
  'brown', 
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
] as const;

export const colorCode = (color: typeof COLORS[number]): number => {
  return COLORS.indexOf(color);
}