export interface PersonalInfo {
  name: string;
  age: string;
  job?: string;
  tel?: string;
  email?: string;
  salary?: string;
  city?: string;
  avatar?: string;
  skills?: {
    name: string;
    level: string;
  }[];
  langs?: { name: string; level: string }[];
}

export default {
  name: '勒布朗·詹姆斯',
  age: '38岁',
  tel: '010 - 1234567',
  city: '洛杉矶',
  salary: '2年一个亿',
  job: '小前锋',
  skills: [
    {
      name: '身体',
      level: '100%',
    },
    {
      name: '技巧',
      level: '80%',
    },
    {
      name: '三分',
      level: '80%',
    },
    {
      name: '稳定性',
      level: '100%',
    },
  ],
  langs: [
    {
      name: '英语',
      level: '100%',
    },
    {
      name: '中文',
      level: '10%',
    },
    {
      name: '鸟语',
      level: '80%',
    },
  ],
} as PersonalInfo;
