using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    public static bool run;    
    public static bool die;
    public Text score_text;
    public Text hiScore_text;
    public static float scrollSpeed = 5f;
    int score;
    float scoreTimer = 0.1f;
    public GameObject[] cactus_prefabs;
    public GameObject birds_prefabs;
    public GameObject enemyContainer;

    void Awake()
    {
        run = false;
        die = false;
        score = 0;
    }

    void Start()
    {
        StartCoroutine(Start_Coroutine());
        StartCoroutine(Spawner_Enemies());
    }

    void Update()
    {        
    }

    void SetText(Text text, string texto)
    {
        text.text = texto;
    }

    string TextFormater(int number, string adicionalText = "")
    {        
        string text = "000000" + number.ToString();
        text = text.Substring(text.Length - 6);
        return adicionalText + text;
    }

    IEnumerator Start_Coroutine()
    {
        while (true)
        {
            if (run == true && die == false)
            {
                yield return StartCoroutine(RiseScore());
            }
            yield return null;
        }
    }

    IEnumerator RiseScore()
    {                            
        score++;
        SetText(score_text, TextFormater(score));
        if (score % 100 == 0)
        {
            scrollSpeed += 0.2f;
            scoreTimer -= 0.01f;
        }
        yield return new WaitForSeconds(scoreTimer);            
    }

    IEnumerator Spawner_Enemies()
    {
        yield return new WaitForSeconds(4);

        while (true)
        {
            if (run == true && die == false)
            {
                float spawnTimer = Random.Range(1f, 2f);
                int maxRandom = 6;
                if (score >= 400)
                {
                    maxRandom = 11;
                }
                int randomEnemy = Random.Range(0, maxRandom);
                if (randomEnemy >= 6)
                {                    
                    float randomPosition = Random.Range(-1f, 0.1f);
                    GameObject bird = Instantiate(birds_prefabs, enemyContainer.transform, true);
                    bird.transform.position = new Vector3 (bird.transform.position.x, randomPosition, 1);                    
                }
                else
                {
                    Instantiate(cactus_prefabs[randomEnemy], enemyContainer.transform, true);
                }
                yield return new WaitForSeconds(spawnTimer);
            }
            else
            {
                yield return null;
            }            
        }
    }
}
