// Formatear milisegundos a minutos y segundos (801201 = 13 min 21 segundos) 
export const formatTime = (time: number) => {
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60
  return `${minutes} min ${seconds < 10 ? '0' : ''}${seconds} segundos`
}

// Formatear fecha
export const formatDate = (unformattedDate: string) => {
  const date = new Date(unformattedDate)
  return date.toLocaleDateString("es-ES", { year: 'numeric', month: 'long' });
}