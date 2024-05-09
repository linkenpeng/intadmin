
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function mockData(size) {
  const citys = {1: '北京', 2: '上海', 3: '广州', 4: '深圳', 5: '杭州', 6: '重庆'}
  const data = Array.from(Array(size), (v, i) => {
      return {
          id: i,
          date: new Date(new Date() + 1000 * 60 * 60 * 24 * i),
          name: 'Tom' + i,
          city: citys[getRandomInt(1, 6)],
          zip: getRandomInt(100000, 999999),
          address: 'No. 189, Grove St, Los Angeles'
      }
  })
  return data
}