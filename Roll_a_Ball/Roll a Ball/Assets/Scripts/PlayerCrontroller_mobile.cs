using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class PlayerCrontroller_mobile : MonoBehaviour {

	private Rigidbody rg;
	public float speed;
    public bool isFlat = true;
    private int count;
    public Text countText;
    public bool moveActive;
    private float startTime;
    private float seconds;
    public GameObject winText;    
    public Text timeText;
    public int endTime = 60;

	void Start(){
		rg = GetComponent<Rigidbody> ();
        Screen.sleepTimeout = SleepTimeout.NeverSleep;              
        Input.gyro.enabled = true;
        count = 0;
        SetCountText();
        moveActive = true;
        Time.timeScale = 1;
        SetTimeText();
        winText.SetActive(false);
        seconds = 0;
        startTime = Time.time;
    }

	void FixedUpdate () {
        if (moveActive)
        {
            GyroMove();
        }
        CountTime();
        ActivateWinObjects();
        Exit();
	}

    void Exit() {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            Application.Quit();

        }
    }

    private void GyroMove()
    {
        if (Input.gyro.enabled)
        {
            //Debug.Log("Log: Rotacion: " + Input.gyro.rotationRate.ToString());           
            float moveHorizontal = Input.gyro.rotationRate.y;
            float moveVertical = Input.gyro.rotationRate.x*-1;

            Vector3 tilt = new Vector3(Input.acceleration.x, 0.0f, (Input.acceleration.y+0.6f));
            // -0.6 N  0
            // -0.9    x

            //Debug.Log("Log: Aceleracion: " + Input.acceleration.ToString() + " Tilt: " + tilt.ToString());
            //rg.AddForce(new Vector3(moveHorizontal, 0.0f, moveVertical) * speed);
            rg.AddForce(tilt * speed * Time.deltaTime);            
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Pick_objects"))
        {
            count += 1;
            SetCountText();
            Destroy(other.gameObject);
        }
    }

    void SetCountText()
    {
        countText.text = "PUNTOS: " + count.ToString();
    }

    void SetWinText()
    {
        Text win_text = winText.GetComponentInChildren<Text>();
        win_text.text = "TIEMPO AGOTADO\nPUNTUACION: " + count.ToString();
    }

    void SetTimeText(){
        timeText.text = "TIEMPO: " + seconds.ToString("00");
    }

    void ActivateWinObjects()
    {
        if ((Time.time - startTime) >= endTime)
        {
            winText.SetActive(true);
            SetWinText();
            Time.timeScale = 0;
        }
    }

    public void Restart()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }

    void CountTime()
    {                
        seconds = (int)((Time.time - startTime));        
        SetTimeText();
        //Debug.Log("Log:" + minutes.ToString("00") + ":" + seconds.ToString("00"));        
    }
}


