using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class NextLevel : MonoBehaviour
{
    public string level;
    public float delay;
    
    [ContextMenu("Activar Carga")]
    public void ActivarCargarNivel()
    {
        Invoke("CargarNivel", delay);
    }

    void CargarNivel()
    {
        if (!FinalLevel())
        {
            Vidas.vidas++;
        }
        SceneManager.LoadScene(level);
    }
    
    public bool FinalLevel()
    {
        return level == "Portada";
        
    }
}
