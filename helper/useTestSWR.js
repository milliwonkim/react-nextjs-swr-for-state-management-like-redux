import useSWR from 'swr';

let testValue = 0;
export function useTestSWR() {
    const { data, mutate } = useSWR('testSWR', () => {
        return testValue + 1;
    });

    console.log('data, mutate', data, mutate);

    return {
        data,
        mutate: (value) => {
            testValue = value;
            // testValue 변수를 외부에 둬서 mutate 메서드를 통해 갱신한다
            return mutate();
        },
    };
}
