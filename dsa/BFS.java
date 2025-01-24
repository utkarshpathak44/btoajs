
class BFS {

    public static void msgain(String... args) {
        int[][] matrix = {
            {3, 5, 1},
            {6, 4, 8},
            {9, 6, 1}
        };
        int[] queries = {4, 2, 6};
        System.out.println(Arrays.toString(dfs2D(matrix, queries)));
    }

    static int[] dfs2D(int[][] matrix, int[] queries) {
        int[] answers = new int[queries.length];
        return answers;
    }
}
