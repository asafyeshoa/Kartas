export default function () {
  return {
    tasks:{
      'id1': {
            name: 'Finish Kartas',
            complete: false,
            dueDate:'2020/05/12',
            dueTime: '18:30'
      },
      'id2': {
            name: 'Finish Course',
            complete: false,
            dueDate:'2020/03/10',
            dueTime: '15:20'

      },
      'id3': {
            name: 'Add Calculator',
            complete: false,
            dueDate:'2020/09/20',
            dueTime: '18:30'
      },
      'id4': {
            name: 'Add Chat',
            complete: false,
            dueDate:'2019/03/30',
            dueTime: '20:30'
      }


    },
    search: '',
    sort: 'name'
  }
}
