
bubbleSort(arr)
function bubbleSort(arr) {
    const n = arr.length;
    let troca;

    do {
        troca = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Troca os elementos
                troca = true;
            }
        }
    } while (troca); // Executa enquanto houver trocas

    return arr;
}

// Vetor fornecido
const vetor = [9, 5, 7, 2, 6, 1, 3, 0, 4, 8];

// Chamando a função bubbleSort para ordenar o vetor
const vetorOrdenado = bubbleSort(vetor);

// Exibindo o vetor ordenado
console.log("Vetor Ordenado:", vetorOrdenado);
