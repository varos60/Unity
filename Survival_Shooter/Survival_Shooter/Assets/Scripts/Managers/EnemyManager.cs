using UnityEngine;

public class EnemyManager : MonoBehaviour
{
    public PlayerHealth playerHealth;
    public GameObject[] enemys;
    public float spawnTime = 3f;
    public Vector3[] spawnPoints;
    public float[] spawnRotation;


    void Awake()
    {
        spawnPoints = new Vector3[3];
        spawnRotation = new float[3];
        spawnPoints.SetValue(new Vector3(-20.5f, 0f, 12.5f), 0);
        spawnRotation.SetValue(130f, 0);
        spawnPoints.SetValue(new Vector3(22.5f, 0f, 15f), 1);
        spawnRotation.SetValue(240f, 1);
        spawnPoints.SetValue(new Vector3(0f, 0f, 32f), 2);
        spawnRotation.SetValue(230f, 2);
    }

    void Start ()
    {
        InvokeRepeating ("Spawn", spawnTime, spawnTime);
    }


    void Spawn ()
    {
        if(playerHealth.currentHealth <= 0f)
        {
            return;
        }

        int spawnPointIndex = Random.Range (0, spawnPoints.Length);
        int enemyindex = Random.Range(0, enemys.Length);

        Instantiate (enemys[enemyindex], spawnPoints[spawnPointIndex], new Quaternion(0, spawnRotation[spawnPointIndex], 0, 0));
    }
}
