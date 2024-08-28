export const initialItems = new Array(29_999_999).fill(0).map((_,i)=>{
  return {
    id: 1,
    selected: i === 29_999_998,
  }

})