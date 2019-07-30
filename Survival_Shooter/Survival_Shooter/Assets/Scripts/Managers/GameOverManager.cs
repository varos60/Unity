using UnityEngine;
using UnityEngine.UI;

public class GameOverManager : MonoBehaviour
{
    public PlayerHealth playerHealth;
    public Text rondaText;
    Animator anim;
    EnemyManager enemyManager;

    void Awake()
    {
        anim = GetComponent<Animator>();
        enemyManager = GameObject.FindGameObjectWithTag("GameController").GetComponent<EnemyManager>();
    }


    void Update()
    {
        if (playerHealth.currentHealth <= 0)
        {
            anim.SetTrigger("GameOver");
            
        }
    }

    public void ChangeRound()
    {
        rondaText.text = "RONDA<br>" + enemyManager.ronda;
        rondaText.text = rondaText.text.Replace("<br>", "\n");
    }
}
