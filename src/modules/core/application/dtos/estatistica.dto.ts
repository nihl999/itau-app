export class Estatistica {
  count = 0;
  sum = 0;
  avg = 0;
  min = 0;
  max = 0;

  constructor(props?: Estatistica) {
    if (props) Object.assign(this, props);
  }
}
