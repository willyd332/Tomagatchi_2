class GridCell {
  constructor(row, col){
    this.row   = row;
    this.col   = col;
    this.state = 0;
  }

  toggle(){
    this.state = (this.state + 1) % 2;
  }

}
