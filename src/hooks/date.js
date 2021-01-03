import { ref } from "vue";

const year = ref(new Date().getFullYear() + 1);
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

export default function useDate() {
  function formatTime(time) {
    const _time = time;
    if (_time < 10) return "0" + _time;
    return _time;
  }

  const newYear = `1 Jan ${year.value}`;

  function updateCountdown() {
    const currentTime = new Date();
    const targetTime = new Date(newYear);
    const diff = targetTime - currentTime;
    let remainder = diff / 1000;

    days.value = Math.floor(remainder / 60 / 60 / 24);
    remainder %= 60 * 60 * 24;
    hours.value = Math.floor(remainder / 60 / 60);
    remainder %= 60 * 60;
    minutes.value = Math.floor(remainder / 60);
    remainder %= 60;
    seconds.value = Math.floor(remainder);
  }

  return {
    year,
    days,
    hours,
    minutes,
    seconds,
    formatTime,
    updateCountdown,
  };
}