using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    public static bool run;
    public static bool die;
    public static float scrollSpeed;
    int score;
    float scoreTimer;
    public GameObject[] cactus_prefabs;
    public GameObject birds_prefabs;
    public GameObject enemyContainer;
    public GameObject GameOver_object;
    public GameObject cloud_prefab;
    public GameObject cloudsContainer;
    public GameObject[] mountain_prefabs;
    public GameObject mountainContainer;

    void Awake()
    {
        run = false;
        die = false;
        scrollSpeed = 0.1f;
        score = 0;
    }

    void Start()
    {
        //SetText(hiScore_text, TextFormater(PlayerPrefs.GetInt("HiScore", 0), "HI "));
        
        //StartCoroutine(Spawner_Enemies());
        //StartCoroutine(Spawner_Clouds());
        //StartCoroutine(Spawner_Mountains());
    }

    void Update()
    {
        //GameOver();
    }

    /*void SetText(Text text, string texto)
    {
        text.text = texto;
    }*/

    /*string TextFormater(int number, string adicionalText = "")
    {        
        string text = "000000" + number.ToString();
        text = text.Substring(text.Length - 6);
        return adicionalText + text;
    }   */ 

    /*IEnumerator Spawner_Enemies()
    {
        yield return new WaitForSeconds(4);

        while (true)
        {
            if (run == true && die == false)
            {
                float spawnTimer = Random.Range(0.5f, 1.5f);
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
    }/*

    /*IEnumerator Spawner_Clouds()
    {
        yield return new WaitForSeconds(5);

        while (true)
        {
            if (run == true && die == false)
            {
                float spawnTimer = Random.Range(2f, 6f);
                float randomPosition = Random.Range(-0.5f, 0.5f);
                GameObject cloud = Instantiate(cloud_prefab, cloudsContainer.transform, true);
                cloud.transform.position = new Vector3(cloud.transform.position.x, randomPosition, 1);               
                yield return new WaitForSeconds(spawnTimer);
            }
            else
            {
                yield return null;
            }
        }
    }*/

    /*IEnumerator Spawner_Mountains()
    {
        yield return new WaitForSeconds(2);

        while (true)
        {
            if (run == true && die == false)
            {
                float spawnTimer = Random.Range(2f, 6f); 
                int randomMountain = Random.Range(0, 2);
                Instantiate(mountain_prefabs[randomMountain], mountainContainer.transform, true);                
                yield return new WaitForSeconds(spawnTimer);
            }
            else
            {
                yield return null;
            }
        }
    }*/

    /*void GameOver()
    {
        if (die)
        {
            GameOver_object.SetActive(true);
            HighScore();
        }
    }*/

    /*public void Restart()
    {
        die = false;
        scrollSpeed = 5f;
        score = 0;
        scoreTimer = 0.1f;
        SetText(score_text, TextFormater(score));
        GameOver_object.SetActive(false);
        foreach (Transform child in enemyContainer.transform)
        {
            Destroy(child.gameObject);
        }
        GameObject player = GameObject.FindGameObjectWithTag("Player");
        Animator player_anim = player.GetComponent<Animator>();
        player_anim.SetBool("Die", die);
        player.transform.position = new Vector3(player.transform.position.x, -0.6f, 1);
        Rigidbody2D player_rb = player.GetComponent<Rigidbody2D>();
        player_rb.velocity = Vector2.zero;
        player_rb.gravityScale = 1;

    }*/

    /*void HighScore()
    {
        if (PlayerPrefs.GetInt("HiScore", 0) < score)
        {
            PlayerPrefs.SetInt("HiScore", score);
            SetText(hiScore_text, TextFormater(score, "HI "));
        }
    }*/
}
