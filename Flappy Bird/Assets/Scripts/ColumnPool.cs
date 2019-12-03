using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ColumnPool : MonoBehaviour
{
    public int columnPoolSize = 5;
    public GameObject columnPrefab;
    public float spawnRate;
    public float columnMin = -3f;
    public float columnMax = 1.4f;    

    private GameObject[] columns;
    private float outSide = 14;
    private float timeSinceLastSpawned;
    private float spawnXPosition = 10f;
    private int currentColumn;


    // Start is called before the first frame update
    void Start()
    {
        columns = new GameObject[columnPoolSize];
        for(int i=0; i < columnPoolSize; i++)
        {
            columns[i] = Instantiate(columnPrefab, Vector2.left*outSide, Quaternion.identity);
        }

        SpawnColumn();
    }

    // Update is called once per frame
    void Update()
    {
        timeSinceLastSpawned += Time.deltaTime;        
        if (timeSinceLastSpawned >= spawnRate && !GameController.instance.gameOver)
        {
            timeSinceLastSpawned = 0;
            SpawnColumn();            
        }
    }

    void SpawnColumn()
    {
        float spawnYPosition = Random.Range(columnMin, columnMax);
        columns[currentColumn].transform.position = new Vector2(spawnXPosition, spawnYPosition);
        currentColumn++;
        if (currentColumn >= columnPoolSize)
        {
            currentColumn = 0;
        }
    }
}
