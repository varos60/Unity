using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    public static GameController instance;
    public GameObject gameOverText;
    public bool gameOver;
    public float scrollSpeed = 1.5f;
    public int score = 0;
    public Text scoreText;

    void Awake()
    {
        if (GameController.instance == null)
        {
            GameController.instance = this;
        }
        else if (GameController.instance != this)
        {
            Destroy(gameObject);
            Debug.LogWarning("GameController duplicado!!");
        }

    }

    void Update()
    {
        Restart();
        Exit();
    }

    public void EnableGameOver()
    {
        gameOverText.SetActive(true);
        gameOver = true;
    }    

    void Restart()
    {
        if (gameOver && (Input.GetMouseButtonDown(0) || Input.GetButtonDown("Fire1")))
        {
            Invoke("RestartScene", 0.5f);            
        }
    }

    void RestartScene()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }

    public void BirdScore()
    {
        if (!gameOver)
        {
            score++;
            scoreText.text = "Score: " + score;
        }
    }

    void OnDestroy()
    {
        if(GameController.instance == this)
        {
            GameController.instance = null;
        }    
    }

    void Exit()
    {
        if(Input.GetKeyDown(KeyCode.Escape))
        {            
            Application.Quit();
        }
    }
}
