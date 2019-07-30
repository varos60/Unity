using System.Collections;
using UnityEngine;

public class EnemyManager : MonoBehaviour
{
    public PlayerHealth playerHealth;
    public GameObject[] enemys;
    public float spawnTime = 3f;
    public float rondaTime = 2f;
    public float ChangeRondaTime = 0.5f;
    private Vector3[] spawnPoints;
    private float[] spawnRotation;    
    public int ronda;
    private int normalSpawnMax;
    private int elSpawnMax;
    public int normalSpawnLeft;
    public int elSpawnLeft;
    private int normalStartSpawn = 2;
    private int elStartSpawn = -1;
    private int elNowSpawn;
    public Animator HudAnimator;


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
        elSpawnLeft = 0;
        elSpawnMax = 0;
        normalSpawnLeft = 0;
        normalSpawnMax = 3;        
        ronda = 0;        
    }

    void Start ()
    {        
        StartCoroutine(Spawn());
    }

    void SetRonda()
    {
        ronda++;        
    }

    IEnumerator Spawn()
    {        
        while (playerHealth.currentHealth > 0f)
        {
            if (elSpawnLeft + normalSpawnLeft == 0)
            {
                SetRonda();
                HudAnimator.SetTrigger("ChangeRound");
                yield return new WaitForSeconds(rondaTime);                
                UpdateSpawnMaxValues();                
                for (int i = 0; i < elSpawnMax + normalSpawnMax; i++)
                {                    
                    int spawnPointIndex = Random.Range(0, spawnPoints.Length);
                    int enemyindex = elSpawnMax == elNowSpawn ? Random.Range(1, enemys.Length) : Random.Range(0, enemys.Length);                    
                    UpdateLeftSpawns(enemyindex);
                    Instantiate(enemys[enemyindex], spawnPoints[spawnPointIndex], new Quaternion(0, spawnRotation[spawnPointIndex], 0, 0));
                    Debug.Log("Spawning: " + (normalSpawnLeft+elSpawnLeft));
                    yield return new WaitForSeconds(spawnTime);
                }                
            }            
            yield return null;
        }
    }

    void UpdateSpawnMaxValues() {
        normalSpawnMax = normalSpawnMax + normalStartSpawn + ronda;
        elSpawnMax = elSpawnMax + elStartSpawn + ronda;
        Debug.Log("Normal: " + normalSpawnMax + " - El: " + elSpawnMax);
        elNowSpawn = 0;
    }

    void UpdateLeftSpawns(int enemyIndex) {
        if (enemyIndex == 0)
        {
            elNowSpawn++;
            elSpawnLeft++;
        }
        else
        {
            normalSpawnLeft++;
        }        
    }
}
